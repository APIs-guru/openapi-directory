import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleIdentityAccesscontextmanagerV1BasicLevel } from "./googleidentityaccesscontextmanagerv1basiclevel";
import { GoogleIdentityAccesscontextmanagerV1CustomLevel } from "./googleidentityaccesscontextmanagerv1customlevel";


// GoogleIdentityAccesscontextmanagerV1AccessLevel
/** 
 * An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
**/
export class GoogleIdentityAccesscontextmanagerV1AccessLevel extends SpeakeasyBase {
  @Metadata({ data: "json, name=basic" })
  basic?: GoogleIdentityAccesscontextmanagerV1BasicLevel;

  @Metadata({ data: "json, name=custom" })
  custom?: GoogleIdentityAccesscontextmanagerV1CustomLevel;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
