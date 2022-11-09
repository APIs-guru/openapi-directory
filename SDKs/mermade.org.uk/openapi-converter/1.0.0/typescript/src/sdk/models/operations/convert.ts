import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConvertRequestBodyValidateEnum {
    On = "on"
}


export class ConvertRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=filename" })
  filename?: string;

  @Metadata({ data: "multipart_form, name=source" })
  source?: string;

  @Metadata({ data: "multipart_form, name=validate" })
  validate?: ConvertRequestBodyValidateEnum;
}


export class ConvertRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: ConvertRequestBody;
}


export class ConvertResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  convert200ApplicationJsonAny?: any;

  @Metadata()
  convert400ApplicationJsonAny?: any;
}
