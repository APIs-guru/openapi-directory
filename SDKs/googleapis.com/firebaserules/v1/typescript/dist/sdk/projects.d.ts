import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * firebaserulesProjectsReleasesCreate - Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.
    **/
    firebaserulesProjectsReleasesCreate(req: operations.FirebaserulesProjectsReleasesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebaserulesProjectsReleasesCreateResponse>;
    /**
     * firebaserulesProjectsReleasesGetExecutable - Get the `Release` executable to use when enforcing rules.
    **/
    firebaserulesProjectsReleasesGetExecutable(req: operations.FirebaserulesProjectsReleasesGetExecutableRequest, config?: AxiosRequestConfig): Promise<operations.FirebaserulesProjectsReleasesGetExecutableResponse>;
    /**
     * firebaserulesProjectsReleasesList - List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.
    **/
    firebaserulesProjectsReleasesList(req: operations.FirebaserulesProjectsReleasesListRequest, config?: AxiosRequestConfig): Promise<operations.FirebaserulesProjectsReleasesListResponse>;
    /**
     * firebaserulesProjectsReleasesPatch - Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.
    **/
    firebaserulesProjectsReleasesPatch(req: operations.FirebaserulesProjectsReleasesPatchRequest, config?: AxiosRequestConfig): Promise<operations.FirebaserulesProjectsReleasesPatchResponse>;
    /**
     * firebaserulesProjectsRulesetsCreate - Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.
    **/
    firebaserulesProjectsRulesetsCreate(req: operations.FirebaserulesProjectsRulesetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebaserulesProjectsRulesetsCreateResponse>;
    /**
     * firebaserulesProjectsRulesetsDelete - Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.
    **/
    firebaserulesProjectsRulesetsDelete(req: operations.FirebaserulesProjectsRulesetsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirebaserulesProjectsRulesetsDeleteResponse>;
    /**
     * firebaserulesProjectsRulesetsGet - Get a `Ruleset` by name including the full `Source` contents.
    **/
    firebaserulesProjectsRulesetsGet(req: operations.FirebaserulesProjectsRulesetsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebaserulesProjectsRulesetsGetResponse>;
    /**
     * firebaserulesProjectsRulesetsList - List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.
    **/
    firebaserulesProjectsRulesetsList(req: operations.FirebaserulesProjectsRulesetsListRequest, config?: AxiosRequestConfig): Promise<operations.FirebaserulesProjectsRulesetsListResponse>;
    /**
     * firebaserulesProjectsTest - Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }
    **/
    firebaserulesProjectsTest(req: operations.FirebaserulesProjectsTestRequest, config?: AxiosRequestConfig): Promise<operations.FirebaserulesProjectsTestResponse>;
}
