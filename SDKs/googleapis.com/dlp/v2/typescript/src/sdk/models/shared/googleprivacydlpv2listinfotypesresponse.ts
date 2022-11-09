import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2InfoTypeDescription } from "./googleprivacydlpv2infotypedescription";


// GooglePrivacyDlpV2ListInfoTypesResponse
/** 
 * Response to the ListInfoTypes request.
**/
export class GooglePrivacyDlpV2ListInfoTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=infoTypes", elemType: shared.GooglePrivacyDlpV2InfoTypeDescription })
  infoTypes?: GooglePrivacyDlpV2InfoTypeDescription[];
}
