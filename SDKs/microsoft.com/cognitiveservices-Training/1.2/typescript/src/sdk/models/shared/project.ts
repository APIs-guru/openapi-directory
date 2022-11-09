import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectSettings } from "./projectsettings";


// Project
/** 
 * Represents a project
**/
export class Project extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created, form, name=Created;" })
  created?: Date;

  @Metadata({ data: "json, name=CurrentIterationId, form, name=CurrentIterationId;" })
  currentIterationId?: string;

  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @Metadata({ data: "json, name=LastModified, form, name=LastModified;" })
  lastModified?: Date;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @Metadata({ data: "json, name=Settings, form, name=Settings;" })
  settings?: ProjectSettings;

  @Metadata({ data: "json, name=ThumbnailUri, form, name=ThumbnailUri;" })
  thumbnailUri?: string;
}
