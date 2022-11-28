import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GooglePrivacyDlpV2ByteContentItemTypeEnum {
    BytesTypeUnspecified = "BYTES_TYPE_UNSPECIFIED",
    Image = "IMAGE",
    ImageJpeg = "IMAGE_JPEG",
    ImageBmp = "IMAGE_BMP",
    ImagePng = "IMAGE_PNG",
    ImageSvg = "IMAGE_SVG",
    TextUtf8 = "TEXT_UTF8",
    WordDocument = "WORD_DOCUMENT",
    Pdf = "PDF",
    PowerpointDocument = "POWERPOINT_DOCUMENT",
    ExcelDocument = "EXCEL_DOCUMENT",
    Avro = "AVRO",
    Csv = "CSV",
    Tsv = "TSV"
}
/**
 * Container for bytes to inspect or redact.
**/
export declare class GooglePrivacyDlpV2ByteContentItem extends SpeakeasyBase {
    data?: string;
    type?: GooglePrivacyDlpV2ByteContentItemTypeEnum;
}
