import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BlogUserInfo } from "./bloguserinfo";
import { Blog } from "./blog";
export declare class BlogList extends SpeakeasyBase {
    blogUserInfos?: BlogUserInfo[];
    items?: Blog[];
    kind?: string;
}
