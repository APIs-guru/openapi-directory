import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Volume } from "./volume";


export class Seriesmembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=member", elemType: shared.Volume })
  member?: Volume[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
