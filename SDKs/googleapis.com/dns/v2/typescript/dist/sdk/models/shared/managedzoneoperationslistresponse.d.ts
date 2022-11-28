import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { Operation } from "./operation";
export declare class ManagedZoneOperationsListResponse extends SpeakeasyBase {
    header?: ResponseHeader;
    kind?: string;
    nextPageToken?: string;
    operations?: Operation[];
}
