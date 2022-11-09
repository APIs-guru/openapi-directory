import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VolumeMount
/** 
 * VolumeMount describes a mounting of a Volume within a container.
**/
export class VolumeMount extends SpeakeasyBase {
  @Metadata({ data: "json, name=mountPath" })
  mountPath?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=subPath" })
  subPath?: string;
}
