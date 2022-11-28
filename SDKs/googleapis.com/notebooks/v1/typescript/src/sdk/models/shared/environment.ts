import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerImage } from "./containerimage";
import { VmImage } from "./vmimage";



// EnvironmentInput
/** 
 * Definition of a software environment that is used to start a notebook instance.
**/
export class EnvironmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: ContainerImage;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=postStartupScript" })
  postStartupScript?: string;

  @SpeakeasyMetadata({ data: "json, name=vmImage" })
  vmImage?: VmImage;
}


// Environment
/** 
 * Definition of a software environment that is used to start a notebook instance.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: ContainerImage;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postStartupScript" })
  postStartupScript?: string;

  @SpeakeasyMetadata({ data: "json, name=vmImage" })
  vmImage?: VmImage;
}
