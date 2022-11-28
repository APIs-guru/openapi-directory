import { SpeakeasyBase } from "../../../internal/utils";
import { PublicationDocument } from "./publicationdocument";
import { HouseEnum } from "./houseenum";
import { PublicationLink } from "./publicationlink";
import { PublicationType } from "./publicationtype";
export declare class BillPublication extends SpeakeasyBase {
    displayDate?: Date;
    files?: PublicationDocument[];
    house?: HouseEnum;
    id?: number;
    links?: PublicationLink[];
    publicationType?: PublicationType;
    title?: string;
}
