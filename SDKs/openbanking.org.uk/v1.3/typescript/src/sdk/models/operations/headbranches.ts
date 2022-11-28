import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HeadBranchesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadBranchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: HeadBranchesHeaders;
}


export class HeadBranchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  noResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
