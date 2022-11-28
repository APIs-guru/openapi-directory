import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";
import { Date } from "./date";



// AndroidVersion
/** 
 * A version of the Android OS.
**/
export class AndroidVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiLevel" })
  apiLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=codeName" })
  codeName?: string;

  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: Distribution;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=versionString" })
  versionString?: string;
}
