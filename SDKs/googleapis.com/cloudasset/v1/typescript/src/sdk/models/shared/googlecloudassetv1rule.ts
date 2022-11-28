import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
import { GoogleCloudAssetV1StringValues } from "./googlecloudassetv1stringvalues";



// GoogleCloudAssetV1Rule
/** 
 * Represents a rule defined in an organization policy
**/
export class GoogleCloudAssetV1Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAll" })
  allowAll?: boolean;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: Expr;

  @SpeakeasyMetadata({ data: "json, name=denyAll" })
  denyAll?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce" })
  enforce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: GoogleCloudAssetV1StringValues;
}
