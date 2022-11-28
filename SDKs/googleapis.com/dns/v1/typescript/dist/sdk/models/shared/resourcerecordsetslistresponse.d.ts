import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { ResourceRecordSet } from "./resourcerecordset";
export declare class ResourceRecordSetsListResponse extends SpeakeasyBase {
    header?: ResponseHeader;
    kind?: string;
    nextPageToken?: string;
    rrsets?: ResourceRecordSet[];
}
