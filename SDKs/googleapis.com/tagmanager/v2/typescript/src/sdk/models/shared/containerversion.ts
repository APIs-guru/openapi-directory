import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuiltInVariable } from "./builtinvariable";
import { Client } from "./client";
import { Container } from "./container";
import { CustomTemplate } from "./customtemplate";
import { Folder } from "./folder";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
import { Zone } from "./zone";


// ContainerVersion
/** 
 * Represents a Google Tag Manager Container Version.
**/
export class ContainerVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=builtInVariable", elemType: shared.BuiltInVariable })
  builtInVariable?: BuiltInVariable[];

  @Metadata({ data: "json, name=client", elemType: shared.Client })
  client?: Client[];

  @Metadata({ data: "json, name=container" })
  container?: Container;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=containerVersionId" })
  containerVersionId?: string;

  @Metadata({ data: "json, name=customTemplate", elemType: shared.CustomTemplate })
  customTemplate?: CustomTemplate[];

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=folder", elemType: shared.Folder })
  folder?: Folder[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=tag", elemType: shared.Tag })
  tag?: Tag[];

  @Metadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @Metadata({ data: "json, name=trigger", elemType: shared.Trigger })
  trigger?: Trigger[];

  @Metadata({ data: "json, name=variable", elemType: shared.Variable })
  variable?: Variable[];

  @Metadata({ data: "json, name=zone", elemType: shared.Zone })
  zone?: Zone[];
}
