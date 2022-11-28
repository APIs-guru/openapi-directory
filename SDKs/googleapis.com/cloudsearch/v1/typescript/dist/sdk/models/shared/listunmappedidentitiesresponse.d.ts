import { SpeakeasyBase } from "../../../internal/utils";
import { UnmappedIdentity } from "./unmappedidentity";
export declare class ListUnmappedIdentitiesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    unmappedIdentities?: UnmappedIdentity[];
}
