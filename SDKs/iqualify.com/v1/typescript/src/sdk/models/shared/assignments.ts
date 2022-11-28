import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";



export class Assignments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: Document })
  files?: Document[];

  @SpeakeasyMetadata({ data: "json, name=marks" })
  marks?: any[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=submittedAt" })
  submittedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
