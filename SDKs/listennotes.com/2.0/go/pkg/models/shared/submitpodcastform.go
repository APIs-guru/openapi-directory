package shared



type SubmitPodcastForm struct {
    Email *string `form:"name=email"`
    Rss string `form:"name=rss"`
    
}

