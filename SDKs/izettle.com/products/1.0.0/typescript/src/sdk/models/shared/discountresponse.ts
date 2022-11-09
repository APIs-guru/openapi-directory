import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class DiscountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Price;

  @Metadata({ data: "json, name=created" })
  created: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag: string;

  @Metadata({ data: "json, name=externalReference" })
  externalReference?: string;

  @Metadata({ data: "json, name=imageLookupKeys" })
  imageLookupKeys?: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=updated" })
  updated: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;
}
