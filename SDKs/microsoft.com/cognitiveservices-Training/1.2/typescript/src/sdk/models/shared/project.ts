import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectSettings } from "./projectsettings";



// Project
/** 
 * Represents a project
**/
export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=CurrentIterationId" })
  currentIterationId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: ProjectSettings;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailUri" })
  thumbnailUri?: string;
}


// ProjectInput
/** 
 * Represents a project
**/
export class ProjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Settings, form, name=Settings;" })
  settings?: ProjectSettings;
}
