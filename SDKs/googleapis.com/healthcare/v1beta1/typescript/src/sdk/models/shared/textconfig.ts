import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InfoTypeTransformation } from "./infotypetransformation";


export enum TextConfigProfileTypeEnum {
    ProfileTypeUnspecified = "PROFILE_TYPE_UNSPECIFIED",
    Empty = "EMPTY",
    Basic = "BASIC"
}


// TextConfig
/** 
 * Configures how to transform sensitive text `InfoTypes`.
**/
export class TextConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalTransformations", elemType: InfoTypeTransformation })
  additionalTransformations?: InfoTypeTransformation[];

  @SpeakeasyMetadata({ data: "json, name=excludeInfoTypes" })
  excludeInfoTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=profileType" })
  profileType?: TextConfigProfileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=transformations", elemType: InfoTypeTransformation })
  transformations?: InfoTypeTransformation[];
}
