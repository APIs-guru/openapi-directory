import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationExecutionExportRepresentation } from "./authenticationexecutionexportrepresentation";
export declare class AuthenticationFlowRepresentation extends SpeakeasyBase {
    alias?: string;
    authenticationExecutions?: AuthenticationExecutionExportRepresentation[];
    builtIn?: boolean;
    description?: string;
    id?: string;
    providerId?: string;
    topLevel?: boolean;
}
