import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";
import { Folder } from "./folder";
import { Macro } from "./macro";
import { Rule } from "./rule";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";


// ContainerVersion
/** 
 * Represents a Google Tag Manager Container Version.
**/
export class ContainerVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=container" })
  container?: Container;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=containerVersionId" })
  containerVersionId?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=folder", elemType: shared.Folder })
  folder?: Folder[];

  @Metadata({ data: "json, name=macro", elemType: shared.Macro })
  macro?: Macro[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=rule", elemType: shared.Rule })
  rule?: Rule[];

  @Metadata({ data: "json, name=tag", elemType: shared.Tag })
  tag?: Tag[];

  @Metadata({ data: "json, name=trigger", elemType: shared.Trigger })
  trigger?: Trigger[];

  @Metadata({ data: "json, name=variable", elemType: shared.Variable })
  variable?: Variable[];
}
