import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerImage } from "./containerimage";
import { VmImage } from "./vmimage";


// Environment
/** 
 * Definition of a software environment that is used to start a notebook instance.
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerImage" })
  containerImage?: ContainerImage;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=postStartupScript" })
  postStartupScript?: string;

  @Metadata({ data: "json, name=vmImage" })
  vmImage?: VmImage;
}
