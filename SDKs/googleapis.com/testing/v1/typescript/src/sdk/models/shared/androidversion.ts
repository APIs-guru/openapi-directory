import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Distribution } from "./distribution";
import { Date } from "./date";


// AndroidVersion
/** 
 * A version of the Android OS.
**/
export class AndroidVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiLevel" })
  apiLevel?: number;

  @Metadata({ data: "json, name=codeName" })
  codeName?: string;

  @Metadata({ data: "json, name=distribution" })
  distribution?: Distribution;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=releaseDate" })
  releaseDate?: Date;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=versionString" })
  versionString?: string;
}
