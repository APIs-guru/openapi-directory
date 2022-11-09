import { SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryRequestInput } from "./queryrequestinput";
/**
 * Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
**/
export declare class QueryRequest extends SpeakeasyBase {
    agentUserId?: string;
    inputs?: QueryRequestInput[];
    requestId?: string;
}
