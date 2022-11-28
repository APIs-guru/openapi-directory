import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectSettings } from "./projectsettings";



// ProjectInput
/** 
 * Represents a project
**/
export class ProjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description, form, name=description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=settings, form, name=settings;" })
  settings?: ProjectSettings;
}


// Project
/** 
 * Represents a project
**/
export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: ProjectSettings;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUri" })
  thumbnailUri?: string;
}
