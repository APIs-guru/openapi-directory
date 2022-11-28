import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: Container;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerVersionId" })
  containerVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=folder", elemType: Folder })
  folder?: Folder[];

  @SpeakeasyMetadata({ data: "json, name=macro", elemType: Macro })
  macro?: Macro[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=rule", elemType: Rule })
  rule?: Rule[];

  @SpeakeasyMetadata({ data: "json, name=tag", elemType: Tag })
  tag?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=trigger", elemType: Trigger })
  trigger?: Trigger[];

  @SpeakeasyMetadata({ data: "json, name=variable", elemType: Variable })
  variable?: Variable[];
}
