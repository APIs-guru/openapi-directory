import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatafeedFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnDelimiter" })
  columnDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=fileEncoding" })
  fileEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=quotingMode" })
  quotingMode?: string;
}
