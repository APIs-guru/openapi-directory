import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FormatComplexity } from "./formatcomplexity";
import { File } from "./file";
import { File } from "./file";


// Format
/** 
 * The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation.
**/
export class Format extends SpeakeasyBase {
  @Metadata({ data: "json, name=formatComplexity" })
  formatComplexity?: FormatComplexity;

  @Metadata({ data: "json, name=formatType" })
  formatType?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.File })
  resources?: File[];

  @Metadata({ data: "json, name=root" })
  root?: File;
}
