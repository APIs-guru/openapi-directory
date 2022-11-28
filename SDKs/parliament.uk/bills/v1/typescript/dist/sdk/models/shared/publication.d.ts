import { SpeakeasyBase } from "../../../internal/utils";
import { PublicationDocument } from "./publicationdocument";
import { PublicationLink } from "./publicationlink";
import { PublicationType } from "./publicationtype";
export declare class Publication extends SpeakeasyBase {
    displayDate?: Date;
    files?: PublicationDocument[];
    id?: number;
    links?: PublicationLink[];
    publicationType?: PublicationType;
    title?: string;
}
