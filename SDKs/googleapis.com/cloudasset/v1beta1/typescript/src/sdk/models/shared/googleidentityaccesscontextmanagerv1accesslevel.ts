import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1BasicLevel } from "./googleidentityaccesscontextmanagerv1basiclevel";
import { GoogleIdentityAccesscontextmanagerV1CustomLevel } from "./googleidentityaccesscontextmanagerv1customlevel";



// GoogleIdentityAccesscontextmanagerV1AccessLevel
/** 
 * An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
**/
export class GoogleIdentityAccesscontextmanagerV1AccessLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic" })
  basic?: GoogleIdentityAccesscontextmanagerV1BasicLevel;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: GoogleIdentityAccesscontextmanagerV1CustomLevel;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
