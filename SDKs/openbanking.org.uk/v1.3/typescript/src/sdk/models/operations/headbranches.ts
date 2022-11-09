import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HeadBranchesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class HeadBranchesRequest extends SpeakeasyBase {
  @Metadata()
  headers: HeadBranchesHeaders;
}


export class HeadBranchesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  noResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
