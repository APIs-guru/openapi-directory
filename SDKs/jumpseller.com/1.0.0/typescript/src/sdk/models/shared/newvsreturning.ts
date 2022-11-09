import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewVsReturning extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=new" })
  new?: number;

  @Metadata({ data: "json, name=returning" })
  returning?: number;
}
