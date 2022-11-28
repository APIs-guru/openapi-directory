import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VolumeMount
/** 
 * VolumeMount describes a mounting of a Volume within a container.
**/
export class VolumeMount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mountPath" })
  mountPath?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subPath" })
  subPath?: string;
}
