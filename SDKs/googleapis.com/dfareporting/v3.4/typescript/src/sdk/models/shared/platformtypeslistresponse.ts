import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformType } from "./platformtype";



// PlatformTypesListResponse
/** 
 * Platform Type List Response
**/
export class PlatformTypesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=platformTypes", elemType: PlatformType })
  platformTypes?: PlatformType[];
}
