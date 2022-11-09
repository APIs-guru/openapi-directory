import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Application } from "./application";


export class Embedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=applications", elemType: shared.Application })
  applications?: Application[];
}
