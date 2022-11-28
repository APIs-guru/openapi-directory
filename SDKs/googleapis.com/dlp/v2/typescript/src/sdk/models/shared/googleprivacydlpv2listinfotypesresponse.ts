import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoTypeDescription } from "./googleprivacydlpv2infotypedescription";



// GooglePrivacyDlpV2ListInfoTypesResponse
/** 
 * Response to the ListInfoTypes request.
**/
export class GooglePrivacyDlpV2ListInfoTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infoTypes", elemType: GooglePrivacyDlpV2InfoTypeDescription })
  infoTypes?: GooglePrivacyDlpV2InfoTypeDescription[];
}
