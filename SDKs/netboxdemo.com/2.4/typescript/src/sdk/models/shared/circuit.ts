import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedProvider } from "./nestedprovider";
import { NestedTenant } from "./nestedtenant";
import { NestedCircuitType } from "./nestedcircuittype";



export class CircuitStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class Circuit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cid" })
  cid: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=commit_rate" })
  commitRate?: number;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=install_date" })
  installDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: NestedProvider;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CircuitStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: NestedCircuitType;
}
