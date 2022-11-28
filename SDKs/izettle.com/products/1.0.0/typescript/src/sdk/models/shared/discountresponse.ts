import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class DiscountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Price;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag: string;

  @SpeakeasyMetadata({ data: "json, name=externalReference" })
  externalReference?: string;

  @SpeakeasyMetadata({ data: "json, name=imageLookupKeys" })
  imageLookupKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}
