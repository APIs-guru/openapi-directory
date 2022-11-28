import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConvertRequestBodyValidateEnum {
    On = "on"
}


export class ConvertRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=validate" })
  validate?: ConvertRequestBodyValidateEnum;
}


export class ConvertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: ConvertRequestBody;
}


export class ConvertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  convert200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  convert400ApplicationJsonAny?: any;
}
