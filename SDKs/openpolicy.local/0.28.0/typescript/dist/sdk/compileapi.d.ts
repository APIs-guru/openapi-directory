import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CompileApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postCompile - Compile
     *
     * This API endpoint allows you to partially evaluate Rego queries and obtain a simplified version of the policy. The example below assumes that OPA has been given the following policy (use `PUT /v1/policies/{path}`):
     *
     * ```yaml
     * package example
     * allow {
     *   input.subject.clearance_level >= data.reports[_].clearance_level
     * }
     * ```
     * Compile API **request body** so that it contain the following fields:
     *
     * | Field | Type | Required | Description |
     * | --- | --- | --- | --- |
     * | `query` | `string` | Yes | The query to partially evaluate and compile. |
     * | `input` | `any` | No | The input document to use during partial evaluation (default: undefined). |
     * | `unknowns` | `array[string]` | No | The terms to treat as unknown during partial evaluation (default: `["input"]`]). |
     *
     * For example:
     *
     * ```json
     * {
     *   "query": "data.example.allow == true",
     *   "input": {
     *     "subject": {
     *       "clearance_level": 4
     *     }
     *   },
     *   "unknowns": [
     *     "data.reports"
     *     ]
     * }
     * ```
     * ### Partial evaluation
     * In some cases, the result of partial valuation is a conclusive, unconditional answer. See [the guidance](https://www.openpolicyagent.org/docs/latest/rest-api/#unconditional-results-from-partial-evaluation) for details.
     *
     * https://blog.openpolicyagent.org/partial-evaluation-162750eaf422 - Partial evaluation article
    **/
    postCompile(req: operations.PostCompileRequest, config?: AxiosRequestConfig): Promise<operations.PostCompileResponse>;
}
