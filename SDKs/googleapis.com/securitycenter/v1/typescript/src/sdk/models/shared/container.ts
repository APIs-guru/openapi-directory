import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Label } from "./label";


// Container
/** 
 * Container associated with the finding.
**/
export class Container extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageId" })
  imageId?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.Label })
  labels?: Label[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
