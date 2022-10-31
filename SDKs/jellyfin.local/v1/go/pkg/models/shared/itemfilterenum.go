package shared

type ItemFilterEnum string

const (
	ItemFilterEnumIsFolder          ItemFilterEnum = "IsFolder"
	ItemFilterEnumIsNotFolder       ItemFilterEnum = "IsNotFolder"
	ItemFilterEnumIsUnplayed        ItemFilterEnum = "IsUnplayed"
	ItemFilterEnumIsPlayed          ItemFilterEnum = "IsPlayed"
	ItemFilterEnumIsFavorite        ItemFilterEnum = "IsFavorite"
	ItemFilterEnumIsResumable       ItemFilterEnum = "IsResumable"
	ItemFilterEnumLikes             ItemFilterEnum = "Likes"
	ItemFilterEnumDislikes          ItemFilterEnum = "Dislikes"
	ItemFilterEnumIsFavoriteOrLikes ItemFilterEnum = "IsFavoriteOrLikes"
)
