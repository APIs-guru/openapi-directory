import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsers200ApplicationJson extends SpeakeasyBase {
    href?: string;
    id?: string;
    name?: string;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getUsers200ApplicationJsonObjects?: GetUsers200ApplicationJson[];
}
