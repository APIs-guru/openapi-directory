import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlatformType } from "./platformtype";


// PlatformTypesListResponse
/** 
 * Platform Type List Response
**/
export class PlatformTypesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=platformTypes", elemType: shared.PlatformType })
  platformTypes?: PlatformType[];
}
