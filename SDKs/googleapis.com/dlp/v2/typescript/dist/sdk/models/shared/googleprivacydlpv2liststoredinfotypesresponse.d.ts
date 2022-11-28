import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoType } from "./googleprivacydlpv2storedinfotype";
/**
 * Response message for ListStoredInfoTypes.
**/
export declare class GooglePrivacyDlpV2ListStoredInfoTypesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    storedInfoTypes?: GooglePrivacyDlpV2StoredInfoType[];
}
