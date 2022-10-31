package shared




type HeaderMatchTypeEnum string

const (
    HeaderMatchTypeEnumEquals HeaderMatchTypeEnum = "Equals"
HeaderMatchTypeEnumRegex HeaderMatchTypeEnum = "Regex"
HeaderMatchTypeEnumSubstring HeaderMatchTypeEnum = "Substring"
)


