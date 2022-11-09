import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CheckRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=api_secret;" })
  apiSecret: string;

  @Metadata({ data: "form, name=code;" })
  code: string;

  @Metadata({ data: "form, name=ip_address;" })
  ipAddress?: string;

  @Metadata({ data: "form, name=request_id;" })
  requestId: string;
}
