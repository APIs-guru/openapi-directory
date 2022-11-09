import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatafeedFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnDelimiter" })
  columnDelimiter?: string;

  @Metadata({ data: "json, name=fileEncoding" })
  fileEncoding?: string;

  @Metadata({ data: "json, name=quotingMode" })
  quotingMode?: string;
}
