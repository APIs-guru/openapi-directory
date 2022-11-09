import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectSettings } from "./projectsettings";


// Project
/** 
 * Represents a project
**/
export class Project extends SpeakeasyBase {
  @Metadata({ data: "json, name=created, form, name=created;" })
  created?: Date;

  @Metadata({ data: "json, name=description, form, name=description;" })
  description?: string;

  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: string;

  @Metadata({ data: "json, name=lastModified, form, name=lastModified;" })
  lastModified?: Date;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @Metadata({ data: "json, name=settings, form, name=settings;" })
  settings?: ProjectSettings;

  @Metadata({ data: "json, name=thumbnailUri, form, name=thumbnailUri;" })
  thumbnailUri?: string;
}
