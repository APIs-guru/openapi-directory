import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpamChoicesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class IpamChoicesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamChoicesReadPathParams;
}


export class IpamChoicesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
